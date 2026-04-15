$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = (Resolve-Path (Join-Path $scriptDir '..')).Path
$mirrorRoot = Join-Path $env:TEMP 'bebidasalcoholicas-local-build'

Write-Host "Mirroring project to $mirrorRoot"
New-Item -ItemType Directory -Force -Path $mirrorRoot | Out-Null

robocopy $projectRoot $mirrorRoot /MIR /XD node_modules .next /NFL /NDL /NJH /NJS /NC /NS /NP | Out-Null
if ($LASTEXITCODE -gt 7) {
  throw "robocopy failed with exit code $LASTEXITCODE"
}

Push-Location $mirrorRoot
try {
  Write-Host 'Installing dependencies in local mirror'
  npm ci
  if ($LASTEXITCODE -ne 0) {
    throw "npm ci failed with exit code $LASTEXITCODE"
  }

  Write-Host 'Running next build in local mirror'
  npm run build
  if ($LASTEXITCODE -ne 0) {
    throw "npm run build failed with exit code $LASTEXITCODE"
  }
}
finally {
  Pop-Location
}
