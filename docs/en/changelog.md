# Changelog

Installed via VCC / ALCOM? New versions are just the "Update" button — no need to re-import the paid files either.

## 3.0.24 (2026-10-23)

- Added presets for Weary Angel, Lucian, and Ellel.
- Added presets for add-on shape keys: Lapwing (100-person survey add-on) and Minase (Plus shape keys). Avatars without the add-on still get the regular preset.

## 3.0.23 (2026-10-11)

- Fixed the Unity Editor stuttering constantly in scenes with several avatars.
- When applying overrides to a prefab during preview leaves the saved face mesh empty, pressing [Restore] in the "The face mesh was lost" dialog now restores the original face mesh and bake values. Ctrl+Z undoes it.
- [Expression backups](/en/faq#expression-backup) are now also saved right before a preview starts and 2 seconds after you change the face or settings.

## 3.0.22 (2026-10-10)

- Added presets for Tayuta and Lowtus (standard style).
- Updated the Menno preset to a revised version that fixes the eye shape changing after the fix.

## 3.0.21 (2026-10-05)

- Fixed Bake Mode auto setup not turning on [Include in fix] for FT add-ons that add their FT BlendShapes during upload. For avatars that are already set up, choose [Include in fix] in the [face tracking settings](/en/guide/face-tracking).
- Added presets for Lila Pyrite, Popo, and Michella.

## 3.0.20 (2026-10-03)

- Fixed some left-wink BlendShapes on Monato bringing back the edits on the open eye.
- Presets can now specify wink side detection and which side to correct. Existing presets without these settings keep the previous behavior.
- Added presets for Licolis, Monato, and Mayo 1.02.

Presets with the new side settings and settings files saved in this version require 3.0.20 or later.

## 3.0.19 (2026-09-29)

- Fixed the face or other parts disappearing during upload, or a missing lip-sync mesh error, when an ABF component was added directly to the face mesh or avatar root.
- Added presets for Shiroa and Bokusei.

## 3.0.18 (2026-09-25)

- [Advanced options] in [fine-tuning and replacement](/en/guide/fine-tune#other-blendshapes) now lets you edit BlendShapes outside the correction targets, such as eyebrows.
- Fixed Bake fine-tuning in Mesh Swap so that the preview matches the exported result.

Settings that edit BlendShapes outside the correction targets require 3.0.18 or later.

## 3.0.17 (2026-09-23)

- Added [BlendShape fine-tuning and replacement](/en/guide/fine-tune). Adjust blink and wink strength or shape while checking the preview, in both normal and bake modes.
- Improved automatic wink side detection. Small movements of a few vertices on the opposite side are less likely to be classified as affecting both eyes.
- Added presets for Hakslea, Grus, Ryouga, and Seiru.

Settings files saved in this version require 3.0.17 or later. Settings saved in earlier versions can still be imported. There is no need to import the unlock key again.

## 3.0.16 (2026-09-20)

- Added a project setting to keep the preview on by default or start it manually, with guidance when Prefab Variant use is detected. Upload-time correction works with either setting.
- When a face mesh is missing and the ABF record cannot restore it, you can review and restore the mesh from its parent Prefab. Edits not saved in the parent may not be recovered.
- [Apply] on a preset now also updates the selected shapes, including bake targets.
- Added an option to exclude mouth and lip BlendShapes from automatic bake selection. It is on for new setups; existing settings are unchanged.
- Moved the face mesh check from the Tools menu into ABF's project settings.

## 3.0.15 (2026-09-17)

- Updated the Kogomi preset and added presets for Honoyura, Yuri, and Snow.

## 3.0.14 (2026-09-15)

- Added a recovery prompt for missing face meshes that lets you review the mesh to restore. A preview notice now also appears before saving Prefabs or Variants.
- Fixed eye-close shapes added during upload by some FT add-ons not being corrected, in both normal and bake modes.
- Fixed correction being skipped when an FT add-on duplicated the bake preview mesh and it was mistaken for an already-corrected mesh.
- Updated the Lumina v2.0 preset and added a notice for active full-face BlendShapes. The Suiha preset is also included.

## 3.0.13 (2026-09-13)

- Fixed edited face values becoming 0 after stopping the Bake Mode preview and then entering and leaving Unity Play Mode. Values that were already lost are not restored automatically; see [expression backups](/en/faq#expression-backup).
- [Reload Expression] now asks for confirmation when all edited values are 0.
- Fixed backups saved at the same time overwriting each other.

## 3.0.12 (2026-09-13)

- Added presets for Lasa, Lowtus, and Nedux.

## 3.0.11 (2026-09-10)

- Added presets for Kogomi and Yumeka.

## 3.0.10 (2026-09-08)

- Added [Eye correction side (usually not needed)] for cases where closing one eye brings back the edits on the other eye. → [How to set it](/en/faq#correction-side)
- Added the FT eye-close BlendShapes `Eye_Left_Blink` and `Eye_Right_Blink` to detection.

## 3.0.9 (2026-09-06)

- Added a preset for Midaris.
- Clarified the guidance when using Avatar Mouth Fix and the message shown after fixing.
- Fixed a warning that remained after deleting the old trial version.

## 3.0.8 (2026-09-04)

- Running Auto Fix from the right-click menu on an avatar fixed with 2.x now moves it to the non-destructive (NDMF) method when the original mesh can be confirmed.
- When you use Avatar Mouth Fix, you can now choose a fix method that works with it.
- Added [どれを選べばいい？（Web）] (Which one should I choose?) to the right-click menu and [?] buttons in the Inspector. They open the matching page of this documentation.
- Expanded English, Korean, and Chinese text, including the Mesh Swap window.

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
