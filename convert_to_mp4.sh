#!/usr/bin/env bash
# Konverterer en optaget 4K .webm-fil (med eller uden stemmelyd) til knivskarp 4K H.264 .mp4
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "Brug: ./convert_to_mp4.sh <sti-til-optagelse.webm>"
  exit 1
fi

INPUT="$1"
OUTPUT="${INPUT%.*}.mp4"

ffmpeg -y -i "$INPUT" \
  -c:v libx264 -preset slow -crf 16 -pix_fmt yuv420p \
  -c:a aac -b:a 192k \
  -movflags +faststart \
  "$OUTPUT"

echo "Færdig! 4K MP4 (inkl. lyd) gemt som: $OUTPUT"
