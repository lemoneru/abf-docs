# Using Tools That Add BlendShapes

Avatar Blink Fix works fine on avatars edited with tools that **add BlendShapes** — extra expressions, extra parts, and so on.

**The only thing that matters is the order.**

## The order

1. **Finish adding and changing BlendShapes first**
2. Then run [Auto Fix (Recommended)](/en/guide/auto-fix)

That's it. The fix is built from **the state of the avatar at that moment**, so finishing the additions first saves you from redoing anything.

## When BlendShapes change afterwards

If you add or remove BlendShapes on an avatar you've already fixed, **have the tool re-record them.**

Just press "**Reload Expression**" in the Inspector.

→ Steps: [Auto Fix: Redoing your expression edits later](/en/guide/auto-fix#redoing-your-expression-edits-later)

## When "自動修正（推奨）" (Auto Fix) is greyed out

When BlendShapes are added or removed, the avatar's Auto Fix preset may no longer match.

1. First, **update the tool to the latest version** — a preset that covers it may already be included
2. If it's still greyed out, use [Manual Fix](/en/guide/manual-fix) and pick the BlendShapes yourself

→ [I updated my avatar and Auto Fix disappeared](/en/faq#avatar-updated)

## When the face mesh changed or there are several

With heavier edits — combining meshes from several avatars, for example — the face mesh may not be picked automatically, or the wrong one may be picked.

Tick "**手動設定**" (Manual) next to "顔のメッシュ（自動選択）" (Face mesh — auto) in the Inspector and point it at the face mesh directly.

→ [The face mesh isn't found automatically / the wrong mesh is picked](/en/faq#face-not-found)

::: tip The non-destructive modes handle this better
[Auto Fix](/en/guide/auto-fix) and [Bake Mode](/en/guide/bake) never swap the mesh, so added BlendShapes only need a "Reload Expression".

With [Mesh Swap](/en/guide/meshswap), the saved record still points at **the mesh from the first fix**, so additions may not show up. See the [FAQ](/en/faq#added-shapes) for the steps.
:::
