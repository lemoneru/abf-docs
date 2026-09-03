---
outline: [2, 2]
---

# FAQ

**Click a question to open its answer.** Sorted by how often each question comes up.

<div class="faq-index">

**[🔝 Most common](#top)** ／ [Install / free edition / presets](#install) ／ [The fix isn't working](#not-working) ／ [Results / appearance](#looks) ／ [Face tracking](#ft) ／ [The tool won't run](#tool-trouble) ／ [Other](#other) ／ [Contact](#contact)

</div>

## 🔝 Most common {#top}

<details id="what-is-bake">
<summary>What is Bake Mode? How is it different from Auto Fix (Recommended)?</summary>

Auto Fix (Recommended) uses your edited BlendShape values to fix the eye BlendShapes.<br>
Bake Mode bakes your edited expression into the mesh as its shape at value 0, then applies the fix.<br>
It may reduce breakage caused by conflicts with expression animations.

See [How to Choose a Fix Mode](/en/guide/bake-vs-normal) to choose a mode for your setup.

</details>

<details id="bake-mouth">
<summary>The mouth or other parts move unexpectedly after switching to Bake Mode</summary>

Mouth BlendShapes or other non-eye shapes may be included in the bake targets.<br>
Select the Avatar Blink Fix object and try setting [Bake Range] to [Eyes Only].<br>
Changing the range resets manual selections to the automatic setup. Shapes using values outside 0–100 remain included.

To exclude individual shapes, press [Stop preview], then open [Advanced Settings] → [BlendShapes to Bake].<br>
Uncheck the orange items you do not want baked.<br>
Leave cyan items selected.

Press [Preview the baked result] to check your changes.<br>
See [Adjusting bake targets](/en/guide/bake#bake-mouth) for the steps.

</details>

<details id="no-visual-change">
<summary>I ran the fix but the avatar in my scene looks the same</summary>

Auto Fix normally turns the preview on automatically, so the fixed face shows right away. If not, check these:

- Is the Inspector button showing "**Preview the fix**" (= preview OFF)? Press it to turn the preview on
- NDMF's preview can stall. Restarting Unity often recovers it

</details>

<details id="preview-off">
<summary>I stopped the preview and the face went back to how it was</summary>

**That's correct behavior!** [Auto Fix](/en/guide/auto-fix) and [Auto Fix (Bake Mode)](/en/guide/bake) are non-destructive — the actual fix is **applied at upload (build) time**. Even with the preview stopped, the uploaded avatar gets the fix.

Want to see it in the scene again? Press "Preview the fix" in the Inspector.

</details>

<details id="redo-expression">
<summary>I already fixed, but want to redo my expression edits</summary>

**Press "Stop preview" first**, then edit. While previewing, the displayed mesh is swapped for the fixed one, and editing in that state can give unintended results.

1. Press "**Stop preview**" in the Inspector
2. Redo your expression edits
3. Press "**Reload Expression**" (re-records the edited state)

Deleting the "Avatar Blink Fix (NDMF)" object and right-clicking → Auto Fix again works too.

When creating or editing expression animation clips in an expression tool, keep the object and work with the preview ON instead.

</details>

<details id="no-modification">
<summary>"No eye deformation found" / the lists show no BlendShapes</summary>

The cause: **the face mesh's BlendShape values haven't been changed**.

This tool repairs expression edits made by changing BlendShape values. If your expression tool only created animation clips, the mesh values are unchanged — so the tool decides there's nothing to fix.

After editing BlendShape values, press "Reload Expression" (or re-detect, in the window).

</details>

<details id="used-in-expression">
<summary>I can't check a BlendShape that my expression edits use</summary>

By design. Fixing a BlendShape your expression is using would **change the very expression you made**.

- In 3.0, [Auto Fix (Bake Mode)](/en/guide/bake) can help here: it bakes the expression into the mesh before fixing, so the expression can survive the fix
- The classic workaround: use split left/right BlendShapes (BlinkL / BlinkR etc.) at equal values in the expression, and set the original back to 0

</details>

<details id="broken-in-game">
<summary>Blinking looks broken in-game / eyes don't close</summary>

Check in this order:

1. **Conflict with expression animations** — if the Inspector shows the yellow notice, and it breaks only while playing expressions, press "Switch to Bake mode" (→ [Auto Fix (Bake Mode)](/en/guide/bake))
2. **Zero-value keys in expression animations** — if an existing animation contains the fixed BlendShape with value 0, it conflicts. Remove that entry from the animation file
3. **Reset BlendShapes** — after a fix, if a left/right reset BlendShape at the bottom of the face mesh's list sits at 100, one eye may snap back. Set it to 0

When using Bake Mode, you do not need to remove the zero-value keys in step 2.

</details>

## Install / free edition / presets {#install}

<details id="trial">
<summary>The free edition won't fix / no fix target appears</summary>

The free edition fixes **one automatically selected blink BlendShape**.

Some avatars don't have a BlendShape it can target, so the trial can't run on them. Fixing MMD or face-tracking BlendShapes is also a paid feature.

→ [Free vs Complete Edition](/en/guide/editions) compares which one you need.

</details>

<details id="preset-missing">
<summary>My avatar is supported, but it says there's no matching preset</summary>

- **Installed via VCC / ALCOM**: try **updating** the tool to the latest version. Presets ship with tool updates
- **Installed via unitypackage**: download the latest version from the product page and re-import
- An avatar-side update can also break the preset match. [Manual Fix](/en/guide/manual-fix) still works, and if you [contact us](#contact) we'll consider updating the preset

The list of supported avatars is on the [Avatar Blink Fix page on BOOTH](https://lemoneru.booth.pm/items/7074770).

</details>

<details id="avatar-updated">
<summary>I updated my avatar and Auto Fix stopped appearing</summary>

When an avatar update adds or removes BlendShapes, the preset may no longer match.

- First try updating the tool (a matching preset may already be included)
- In a hurry? [Manual Fix](/en/guide/manual-fix) lets you pick the targets and fix right away
- [Contact us](#contact) and we'll consider a preset update for that avatar version

</details>

<details id="from-2x">
<summary>What happens to avatars I fixed with 2.x?</summary>

They keep working. Installing 3.0 won't break them. Even if you right-click-fix an already-fixed avatar, the tool detects it and shows guidance.

For a summary of what changed in 3.0 → [Coming from 2.x](/en/guide/from-2x)

</details>

<details id="revert-to-2x">
<summary>I want to go back to 2.x</summary>

The steps are in [Coming from 2.x: Going back to 2.x](/en/guide/from-2x#going-back-to-2-x).

⚠️ **Don't install 2.x while 3.0 is still present** (Unity may stop compiling). **While 3.0 is still installed**, delete the ABF child objects under your avatar, then remove 3.0 before importing 2.x.
Leave `Data`, `Animation`, `json` and the unlock key in place.

</details>

<details id="ndmf">
<summary>Do I need NDMF?</summary>

Yes, for the non-destructive features ([Auto Fix](/en/guide/auto-fix), [Auto Fix (Bake Mode)](/en/guide/bake)). Installing via VCC / ALCOM brings it in automatically.

::: tip ＋ button disabled / "nadena.dev.ndmf not found"
The NDMF repository isn't registered. Add **`https://vpm.nadena.dev/`** to VCC / ALCOM as well.
:::

Without NDMF, [Mesh Swap (Legacy)](/en/guide/meshswap) (the classic window) still works (**when installed via unitypackage**).

</details>

## The fix isn't working {#not-working}

<details id="face-not-found">
<summary>The face mesh isn't auto-detected / the wrong mesh is selected</summary>

**Auto-detection was rebuilt in 3.0.7.** It now looks for the mesh that holds the blink BlendShapes rather than requiring the name `Body`, so avatars with meshes named `Face` and the like are found too. First, **update to the latest version**.

If it still picks wrong (e.g. avatars combined from multiple bodies), tick "**Manual**" next to "Face Mesh (Auto)" in the Inspector and **assign the face mesh directly**. Once assigned, the fix proceeds automatically.

</details>

<details id="added-shapes">
<summary>It misbehaves when combined with a tool that adds BlendShapes</summary>

In [Mesh Swap (Legacy)](/en/guide/meshswap), the fix record points at **the mesh from your first fix**. Adding BlendShapes later leaves the record pointing at the old mesh, and the additions may not carry over.

1. "**Restore Original**" to go back
2. Delete that avatar's record from the tool's "**Saved Data**"
3. Add your BlendShapes
4. Fix again

The non-destructive [Auto Fix](/en/guide/auto-fix) doesn't swap the mesh, so it's much less prone to this.

→ The order to work in: [Using Tools That Add BlendShapes](/en/guide/added-blendshapes)

</details>

<details id="cannot-revert">
<summary>It says "restore first" but the restore button is disabled</summary>

Do not delete the saved record yet.<br>
Deleting it while the mesh is still fixed removes the original mesh location, so the tool can no longer restore it.

If this happened after duplicating or renaming, and the avatar from before that change still exists, assign that avatar to the tool and try [Restore Original].<br>
If that avatar is no longer available, or you still cannot restore it, keep the record and [contact us](#contact).

</details>

<details id="copied-avatar">
<summary>Duplicating / renaming my avatar makes it count as "already fixed" or error out</summary>

Mesh Swap saves its fix records per avatar name.<br>
Follow this order when duplicating or renaming:

1. Press [Restore Original] in the tool
2. Duplicate or rename the avatar
3. Apply the fix again

If you have already duplicated or renamed it and cannot restore it, see [When the restore button is disabled](#cannot-revert).

</details>

<details id="stale-data">
<summary>An old record is getting in the way</summary>

An old fix record can sometimes interfere with a new fix.<br>
To delete the record and start over in Mesh Swap, follow this order:

1. Press [Restore Original] to restore the original mesh
2. Delete that avatar's record from [Saved Data]
3. Assign the avatar again and apply the fix

If [Restore Original] is disabled, do not delete the record. See [these instructions](#cannot-revert).

</details>

## Results / appearance {#looks}

<details id="unnatural-eyelid">
<summary>Eyelids or lashes move unnaturally when blinking</summary>

In Manual Fix, **BlendShapes that didn't need fixing may be checked**.

Narrow the fix targets down to the BlendShape your avatar actually blinks with. When adding more candidates, preview one at a time and uncheck whichever turns unnatural.

</details>

<details id="over-range">
<summary>My edits use values above 100 or negative values</summary>

Supported since 3.0. When overdriven values are involved, the fix goes through [Auto Fix (Bake Mode)](/en/guide/bake) (the tool guides you).

</details>

<details id="avatar-side">
<summary>A particular BlendShape breaks the face, fix or no fix</summary>

Some avatars ship BlendShapes that break when used alone (whole-face reshapers, lash shapes that poke out, and so on).

The tool **shows such risky BlendShapes in red**. Remove them from the fix targets and see how it goes.

</details>

## Face tracking {#ft}

<details id="face-tracking">
<summary>Does it work on FT avatars?</summary>

Yes. Bake Mode is recommended when using face tracking.<br>
Set FT eye-close BlendShapes to [Include in fix]. This is a Complete Edition feature.

→ How to choose, why, and what it can't fix: [Using Face Tracking](/en/guide/face-tracking)

</details>

<details id="ft-addon">
<summary>After adding an FT addon, the eyes sink into the face when smiling</summary>

This can come from how the FT addon's animations are built, and in that case this tool can't fix it.

Try Bake Mode with FT eye-close BlendShapes set to [Include in fix] (→ [how](/en/guide/face-tracking)).<br>
If the symptom remains, check the FT addon's settings.

</details>

<details id="webcam">
<summary>Webcam blink tracking breaks the eyes</summary>

You can also try disabling webcam-driven blinking.<br>
Choose whichever is more convenient: changing your in-game settings or configuring the avatar in Unity.

- **In-game:** Open VRChat's Settings → Tracking & IK → Eye Tracking and turn [Disable Eye Lid Tracking] ON. No avatar re-upload is needed.
- **In Unity:** Open the avatar's VRC Avatar Descriptor → Eye Look → Eyelids, set the BlendShapes [Blink] entry to [-none-], then re-upload. This also disables regular automatic blinking driven by the Avatar Descriptor.

See VRChat's official guides for [in-game settings](https://wiki.vrchat.com/wiki/Settings#Eye_Tracking) and [avatar blinking settings](https://creators.vrchat.com/avatars/#simulated-eye-movement).

</details>

## The tool won't run {#tool-trouble}

<details id="menu-missing">
<summary>The right-click menu or Tools entry doesn't show up</summary>

**If only the right-click menu is missing** — installing via unitypackage without NDMF means the right-click menu doesn't appear at all (the Tools → "Avatar Blink Fix" window still does). Install NDMF (→ [Do I need NDMF?](#ndmf)) or use [Mesh Swap (Legacy)](/en/guide/meshswap).

**If the Tools entry is missing too** — a compile error in any other asset stops every editor extension in Unity. It's usually not this tool's own problem.

Open the Unity Console and look for **red errors**. Updating or removing the package causing them often solves everything at once.

</details>

<details id="preview-stuck">
<summary>The preview stopped working / the fix became invisible</summary>

When NDMF's preview stalls, the fix result can stop showing. Restarting Unity often recovers it.

</details>

<details id="afk">
<summary>The face breaks only while AFK or during specific animations</summary>

Some animations that ship with the avatar (AFK poses etc.) drive the eye BlendShapes themselves. This tool repairs the BlendShapes; it doesn't rewrite what those animations do.

Remove the eye BlendShape entries from the animation in question.

</details>

## Other {#other}

<details id="anim-file">
<summary>Will it fix my expression animation files themselves?</summary>

No. This tool repairs **BlendShapes**. It has no feature that automatically rewrites expression animation files.

To change expression animations, use FaceEmo or another expression-editing tool, or edit the Animation files manually. Remove entries that hold a corrected BlendShape at value 0.

If you want to keep the original expression animations unchanged, [Auto Fix (Bake Mode)](/en/guide/bake) is recommended because those zero-value entries do not need to be removed.

</details>

## Contact {#contact}

Still stuck? Message us via the [Avatar Blink Fix page on BOOTH](https://lemoneru.booth.pm/items/7074770).

::: warning Please don't contact avatar creators about this tool
If a problem occurs while using this tool, please don't take it to the avatar's creator or other third parties. Contact us via the BOOTH message above.
:::
