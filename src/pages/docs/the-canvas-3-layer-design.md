---
title: "The Canvas: 3-Layer Design"
description: The diagram is made up of three layers. 
---
{% callout type="note" title="Written in the form of Pattern Language" %}
This article is written in the form of Pattern Language.
Each article contains four sections: Intent, Problem, Solution, and Discussion.
{% /callout %}


{% callout type="note" title="Written in the form of Pattern Language" %}
To keep this tutorial short, a lot of statements are opinionated. I will not warn you every time I make an opinionated statement.
{% /callout %}


{% three-layer type="warning" title="Oh no! Something bad happened!" /%}

## Intent
Stack an element on top of another element.

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


### Problem statement


### Starting point

```html
<style>
  .diagram-frame {
    margin: 20px;
  }
  .lifeline-layer,
  .message-layer {
    transform: translate(-15px, 15px) /* this is only to make the layers visible */;
  }
</style>
<div class="diagram-frame w-32 bg-red-50">
  <div class="lifeline-layer h-full bg-red-100">
  </div>
  <div class="message-layer bg-green-50">
    <div class="content h-20"></div>
  </div>
</div>
```

![img_2.png](src/images/img_2.png)

You will notice that the lifeline layer is not visible even with the `h-full` (height: 100%). This is because the lifeline layer is

We generally want to avoid setting fixed heights, otherwise we might end up with not enough space for the content.


### Absolute

Stacking layers is an often seen technique in UI design. For example, many website have a Hero section
like below:

![Hero section with stacked layers](../../images/hero-stacking-layers.png)

You can use absolute positioning.

```html
<div class="sequence-diagram">
    <div class="lifeline-layer absolute">
    </div>
    <div class="message-layer">
    </div>
</div>
```

> Absolutely positioned elements are removed entirely from the document flow. That means they have no effect at all on their parent element or on the elements that occur after them in the source code. An absolutely positioned element will therefore overlap other content unless you take action to prevent it. Sometimes, of course, this overlap is exactly what you desire, but you should be aware of it, to make sure you are getting the layout you want!
> https://www.w3.org/wiki/CSS_absolute_and_fixed_positioning

`absolute` can achieve the stacking effect, but it also has some drawbacks. If the lifeline layer is absolute,
then it does not have a height. We will then have to set the height manually with something like `height: 100vh;`.

// TODO: Add more drawbacks

A better way is to use `grid`. 

`grid` is the latest CSS layout mode. It is a two-dimensional system, meaning it can handle both columns and 
rows, unlike `flexbox` which is largely a one-dimensional system. `grid` is designed to be a more powerful 
system than `flexbox` and as such it is a more complicated system to use.

### Isn't there already `display:table`?

Before we go into details about `grid`, you might be wondering why `grid` is added to CSS when there is already
`display:table`. 

{% callout type="warning" title="Opinionated Statement" %}
To keep this tutorial short, a lot of statements are opinionated. I will not warn you every time I make an opinionated statement.
{% /callout %}

`display:table` is to simulate a table without a real `table` element in HTML. It requires the content to be **inside** a cell.
While `display:grid` is like a lines painted on the ground in parking lots. It is a good indicator, but it does not prevent you
from putting your content in different ways. Actually, some parking lot may intentionally instruct a long vehicle to use more than
one lot. Think of the two like below:

![img.png](src/images/img.png)

![img_1.png](src/images/img_1.png)

The below two are more or less the same:

````html
<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
````

````html
<div id="table">
    <div class="tr">
        <div class="td"></div>
        <div class="td"></div>
        <div class="td"></div>
    </div>
    <div class="tr">
        <div class="td"></div>
        <div class="td"></div>
        <div class="td"></div>
    </div>
</div>
````

There is nothing wrong with table. But if it is a table, you'd better use a real `table` element. Use `display:table` only when
you don't have control over the HTML.

### Now let's talk about grid




Well, tables 

```html

```js
/** @type {import('@tailwindlabs/lorem').ipsum} */
export default {
  lorem: 'ipsum',
  dolor: ['sit', 'amet', 'consectetur'],
  adipiscing: {
    elit: true,
  },
}
```

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

### Natus aspernatur iste

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.

---

## Quos porro ut molestiae

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Voluptatem quas possimus

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

### Id vitae minima

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.

---

## Vitae laborum maiores

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Corporis exercitationem

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

### Reprehenderit magni

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.
