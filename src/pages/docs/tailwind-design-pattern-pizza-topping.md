---
title: Pizza Topping
description: Render one element on top of another. 
---
{% callout type="note" title="Written in the form of Pattern Language" %}
This article is written in the form of Pattern Language.
Each article contains four sections: Intent, Problem, Solution, and Discussion.
{% /callout %}

![img_1.png](../../images/pizza-topping.png)

Also known as: Stacking Elements, Layering Elements

## Intent
Stack an element on top of another element.

{% three-layer type="warning" title="Oh no! Something bad happened!" /%}

## Problem
The normal flow of the document is from top to bottom. In some cases, we want to stack an element 
on top of another element. When we do this, it must not create extra gaps or margins (more details below).

### Example in ZenUML

The diagram is rendered in three layers. From bottom to top, they are the **DiagramFrame**, 
the **Lifeline Layer** and the **Message Layer**.

## Solution

```html
<div class="sequence-diagram relative">
  <div class="lifeline-layer absolute h-full"></div>
  <div class="message-layer"></div>
</div>
```

Let me explain the tailwind CSS classes one by one:

1. `relative`: To give lifeline-layer height (see below).
2. `absolute`: To remove the Lifeline Layer from the normal flow of the document.
3. `h-full`: To make the Lifeline Layer as high as the sequence diagram. Both `relative` and `absolute` are required to make this work.

The message layer is in the normal flow and it gets the height from the content.
