import os
import yaml
import requests

# Load repository configuration from scripts/repos.yml
with open("scripts/repos.yml", "r") as f:
    repos = yaml.safe_load(f)

BEGIN_MARKER = "<!-- BEGIN AUTO-README -->"
END_MARKER = "<!-- END AUTO-README -->"

for repo in repos:
    repo_url = repo["repo_url"]
    page_path = repo.get("page_path")  # Make optional
    branch = repo.get("branch", "main")
    readme_path = repo.get("readme_path", "README.md")

    try:
        # Parse GitHub repo URL to get owner and repo name
        owner, repo_name = repo_url.rstrip("/").split("/")[-2:]

        # Construct raw README.md URL
        readme_url = f"https://raw.githubusercontent.com/{owner}/{repo_name}/refs/heads/{branch}/{readme_path}"
        response = requests.get(readme_url)
        if response.status_code != 200:
            print(f"[!] Failed to fetch README from {readme_url}")
            continue

        # Strip title, subtitle, and badges (first 3 lines)
        readme_lines = response.text.strip().splitlines()
        cleaned_readme = "\n".join(readme_lines[3:]).strip()

        if not page_path:
            print(f"[!] No page_path specified for {repo_url}, skipping write.")
            continue

        # Load the target Jekyll page content
        if not os.path.exists(page_path):
            print(f"[!] Page path not found: {page_path}")
            continue

        with open(page_path, "r", encoding="utf-8") as f:
            page_lines = f.readlines()

        # Locate the README section in the page
        try:
            begin_idx = next(i for i, line in enumerate(page_lines) if BEGIN_MARKER in line)
            end_idx = next(i for i, line in enumerate(page_lines) if END_MARKER in line)
        except StopIteration:
            print(f"[!] Markers not found in {page_path}. Skipping.")
            continue

        # Replace content between markers
        updated_lines = (
            page_lines[: begin_idx + 1]
            + [f"\n{cleaned_readme}\n"]
            + page_lines[end_idx:]
        )

        # Write the updated file
        with open(page_path, "w", encoding="utf-8") as f:
            f.writelines(updated_lines)

        print(f"[✓] Updated {page_path} with README from {repo_url}")

    except Exception as e:
        print(f"[!] Error processing {repo_url}: {e}")
