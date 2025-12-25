# Create directories
New-Item -ItemType Directory -Path "i18n\en\docusaurus-plugin-content-docs\current" -Force | Out-Null
New-Item -ItemType Directory -Path "modules\community\blog" -Force | Out-Null
New-Item -ItemType Directory -Path "modules_i18n\community-zh\blog" -Force | Out-Null

# en doc
Write-Host "Copying English docs..."
Copy-Item -Path "modules\docs\*" -Destination "i18n\en\docusaurus-plugin-content-docs\current\docs\" -Recurse -Force -Exclude ".github"

# en community
Write-Host "Copying English community..."
Copy-Item -Path "modules\community\*" -Destination "i18n\en\docusaurus-plugin-content-docs\current\community\" -Recurse -Force -Exclude ".github"

# en blog
Write-Host "Copying English blog..."
if (Test-Path "modules\community\blog") {
    Copy-Item -Path "modules\community\blog\*" -Destination "blog\" -Recurse -Force -Exclude ".github"
}

# zh
New-Item -ItemType Directory -Path "i18n\zh\docusaurus-plugin-content-docs\current" -Force | Out-Null

# zh docs
Write-Host "Copying Chinese docs..."
Copy-Item -Path "modules_i18n\docs-zh\*" -Destination "i18n\zh\docusaurus-plugin-content-docs\current\docs\" -Recurse -Force -Exclude ".github"

# zh community
Write-Host "Copying Chinese community..."
Copy-Item -Path "modules_i18n\community-zh\*" -Destination "i18n\zh\docusaurus-plugin-content-docs\current\community\" -Recurse -Force -Exclude ".github"

# zh blog
Write-Host "Copying Chinese blog..."
if (Test-Path "modules_i18n\community-zh\blog") {
    Copy-Item -Path "modules_i18n\community-zh\blog\*" -Destination "i18n\zh\docusaurus-plugin-content-blog\" -Recurse -Force -Exclude ".github"
}

Write-Host "Copy completed successfully!"
