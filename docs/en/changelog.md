# Changelog

Installed via VCC / ALCOM? New versions are just the "Update" button — no need to re-import the paid files either.

## 3.0.7 (2026-08-28)

- Fixed a case where **the blink fix didn't take effect when MMD BlendShapes were used in expression edits**
- **More avatars now get their face mesh auto-detected.** Previously only meshes named `Body` were searched, so avatars with meshes named `Face` and the like couldn't use Auto Fix
- Assigning the face mesh by hand now proceeds straight to the fix
- Fixed 4 bundled presets (MUMUS 1.0, Wolferia, Marycia 1.5.1, Carroll)

## 3.0.6 (2026-08-28)

- Fixed the preview appearance staying broken after returning from Play Mode to the editor

## 3.0.5 (2026-08-28)

- **NDMF is now declared as a VPM dependency.** Adding the tool in VCC / ALCOM brings NDMF in with it
- **The bake target list is now color-coded** (cyan = around the eyes / orange = outside the eyes), so you can see what's safe to uncheck
- Rebuilt the notice for leftover old versions around "**migration**" (one confirmation; the list of moved files goes to the Console)
- Added a **[Docs (Web)]** button to the Inspector. The "Documentation" link in VCC / ALCOM now points to this site
- Fixed the fix appearing unapplied right after reopening a project (upload results were never affected)
- Made Manual Fix easier to use (BlendShapes used by your expression edits can no longer be picked as fix targets / the preview button works even with 0 targets / it now opens ready to edit)
- Made Manual Fix easier to use (BlendShapes used by your expression can no longer be selected as fix targets / preview can be pressed with 0 items / opens ready to edit)

## 3.0.4 (2026-08-27)

- Expanded face-tracking support: `EyeClosed` / `EyeClosedJoyful` BlendShapes are now detected as fix targets

## 3.0.3 (2026-08-27)

- Reorganized the whole UI so it can be operated without reading (explanations moved into the "?" next to each heading)
- Button renaming: "Auto Setup" → "**Reload Expression**" (the button to press after changing your expression edits)
- Projects with Avatar Mouth Fix now get guidance on the supported combination, plus protection so unsupported combinations can't corrupt fix records

## 3.0.2 (2026-08-26)

- More bundled presets (133 presets, 100+ supported avatars)
- Reviewed item names, right-click menu ordering, and guidance texts
- Bake mode now excludes BlendShapes still at the avatar's original default values from auto-selection (prevents face breakage when bundled animations play)
- Bake mode now includes detected face-tracking BlendShapes in the fix by default (a toggle can exclude them)
- Added the "Complete Edition Unlocked" notice on successful key import

## 3.0.1 (2026-08-25)

- Distribution package housekeeping and adjusted guidance for VCC / ALCOM installs

## 3.0.0 — the big 3.0 changes

### Major changes

- **Non-destructive**: right-click the avatar → "Auto Fix (Recommended)" and you're done (NDMF-based). The mesh is never rewritten; the fix is applied automatically at upload time. Delete the added object and everything is back to normal
- The classic window (the 2.x method) remains as "**Mesh Swap (Legacy)**" — for environments without NDMF, or as a fallback when other tools interfere
- Avatars fixed with 2.x keep working. Importing 3.0 over 2.x won't break them (right-click-fixing one is detected and guided)

### New features

- **Automatic conflict check**: detects expression animations driving fixed BlendShapes, and offers a switch to Bake mode
- **Bake mode is non-destructive now too**: baking your edits into the base mesh also happens automatically at build time
- Support for **overdriven** BlendShape values (above 100 / negative)
- **Face tracking (FT)** eye-close BlendShapes are detected, with a choice to include them in the fix
- **Fine-tune settings export / import**: save settings to JSON and load them onto an avatar rebuilt in Blender
- **Animation merging** now carries over non-BlendShape keys — PhysBones, object toggles and more
- **Saved Data**: view and delete the tool's stored records (backups etc.) in one list
- **Support information copy**: outputs a diagnostic code you can paste into an inquiry
- **VCC / ALCOM support** (VPM distribution): no more re-importing on every update
- Languages: 日本語 / English / 한국어 / 中文

### Trial edition

- The trial was rebuilt to share 3.0's exact workflow (right-click flow, preview, restore). It fixes one automatically selected BlendShape
- Import the unlock key on top of the trial and it becomes the full edition cleanly, with nothing left behind

### Fixes & improvements

- Error messages fully reworked into "cause + what to do next"
- Missing presets now show guidance instead of an error
- Clearer warnings for risky BlendShapes (whole-face reshapers etc.)

### Known notes

- If NDMF's preview stalls, the fix can stop showing. Restarting Unity recovers it
- With preview ON, you can see the corrected appearance in the scene. The fix is applied at upload time even with preview OFF
