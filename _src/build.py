#!/usr/bin/env python3
"""Builds index.html from _src/index.src.html + i18n.json + skills.json (run from the repo root)."""
import json, os
root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src = open(os.path.join(root, "_src/index.src.html"), encoding="utf-8").read()
i18n = json.load(open(os.path.join(root, "_src/i18n.json"), encoding="utf-8"))
skills = json.load(open(os.path.join(root, "_src/skills.json"), encoding="utf-8"))
keys = set(i18n["en"])
for l, d in i18n.items():
    missing = keys - set(d)
    assert not missing, (l, missing)
out = src.replace("/*I18N*/", json.dumps(i18n, ensure_ascii=False)).replace("/*SKILLS*/", json.dumps(skills, ensure_ascii=False))
open(os.path.join(root, "index.html"), "w", encoding="utf-8").write(out)
print("index.html written")
