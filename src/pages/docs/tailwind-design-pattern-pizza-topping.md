---
title: Pizza Topping
description: Render one element on top of another. 
---

![img_1.png](../../images/pizza-topping.png)

Also known as: Stacking Elements, Layering Elements

## Intent
Stack an element on top of another element.

## Problem
The normal flow of the document is from top to bottom. In some cases, we want to stack an element 
on top of another element. When we do this, it must not create extra gaps or margins (more details below).

### Example in ZenUML

The diagram is rendered in three layers. From bottom to top, they are the **Background**, 
the **Lifeline Layer** and the **Message Layer**.

{% three-layer type="warning" title="Oh no! Something bad happened!" /%}

## Solution

```html
<div class="sequence-diagram relative">
  <div class="lifeline-layer absolute h-full w-full"></div>
  <div class="message-layer"></div>
</div>
```

Let me explain the tailwind CSS classes one by one:

1. `relative`: To give lifeline-layer height (see below).
2. `absolute`: To remove the Lifeline Layer from the normal flow of the document.
3. `h-full`: To make the Lifeline Layer as high as the sequence diagram. Both `relative` and `absolute` are required to make this work<sup>1</sub>.
4. `w-full`: To make the Lifeline Layer as wide as the sequence diagram. Due to `absolute`, the Lifeline layer will not have width by default<sup>2</sup>.

The message layer is in the normal flow and it gets the height from the content.

> 1. Without `absolute`, `h-full` (or any percentage) has no effect, because its height will have impact one the flow. With `absolute`, 
> the Lifeline layer will be get the height from the nearest positioned ancestor. `relative` is used to position its parent.
> 2. You may notice that ZenUML/core does not use `w-full`. It is because the Lifelines are also absolutely positioned. So the width
> of the Lifeline Layer is not important.

## Discussion

A special requirement for this pattern is that the Lifeline Layer must dynamically adjust its height
with the Message Layer.

Transform can also be used to shift the element. However, it is not recommended because it will create
extra gaps or margins.

Grid can also be used to stack elements. The support is pretty good (95+%). It has extra benefits such
as you get height and width for free. It is a recommended solution if your audience are using modern
browsers.
