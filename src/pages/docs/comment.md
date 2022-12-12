---
title: Comment
description: Comment on messages and participant
---

It is often that we need to add notes to a message or participant. This is where the comment feature comes in
handy. Both comment for messages and participants use the same syntax `//comment`.

---

## Comment for messages

Comment for messages are rendered above the messages. If the comment is added on fragments, the comment
is rendered above the fragment.

```zenuml
// comment on fragment
if(x) {
  // comment on message
  A.method()
}
```

### Styling messages with comment

You can style the message with comment by adding `[red]` at the beginning of the comment.

```zenuml
// [red] This is a tech debt
A.method()
```

## Comment for participants

Comment for participants are rendered as a tooltip on the participant when hovering over it.

```zenuml
// comment on participant; only visible when hovering over the participant
A
```

### Styling participants with comment

You can style the participant with comment by adding `[red]` at the beginning of the comment.

```zenuml
// [red] This is a tech debt
A
```

// Learn more about styling and themes

## Advanced: parsing comment

Comment is defined in the lexer g4 file.

```g4
COMMENT
 : '//' .*? '\n' -> channel(COMMENT_CHANNEL)
 ;
```
