---
title: The ZenUML Language
description: This chapter explains, mostly with examples, the constructs that make up ZenUML diagram.
---

This chapter explains, mostly with examples, the constructs that make up ZenUML diagram. Because it's
a description of the complete language, the material is detailed, so we recommend that you skim it,
then come back as necessary to check up on details.

The simplest ZenUML diagram is a sequence of statements 1:

```
participant.sync_message
participant_1->participant_2: async message
```

In some statements, the `participant` may be missing. After ZenUML has checked your code to make sure
there are no syntactic errors, it will render the diagram.

The first section of this chapter describes the messages in detail. The second sections begins the
description of participants, title and other metadata.

# The use case

The ZenUML examples in this chapter are based on a simple RESTFul service that allows clients (web, mobile)
to borrow a book.

```json
POST /books/:id/borrow
body: {
  "user_id": "123"
}
response: {
  "status": "success",
  "book_borrow_id": "456"
}
```

In the backend, the service will call the update the book status in database to `borrowed` and create
a new record in the `book_borrow` table.

# Expressions

Like most programming languages (though ZenUML is not a programming language), ZenUML is rich in expressions
for describing the behavior of systems. Any expression can be used as a message, a parameter or a condition.

We begin with expressions, since expressions are the simplest statements, and most other statements are made
up of expressions of various kinds. An expression is formed by combining primary expressions and other
expressions with operators. The primary expressions are the primitive building blocks: they include constants,
variables, function invocations and various built-ins, like `$SN` for sequence number (to be explained later).

> Note that arrays are **not** supported in ZenUML. A workaround is to wrap them in a string (e.g. `"[array_1]"`).

Our discussion of expressions starts with constants and variables. The come the operators that can be used to
combine expressions. These operators fall into five categories: arithmetic, comparison, logical, conditional
and assignment.

**Constants.** There are two types of constants, string and numeric. A strong constant is created by enclosing
a sequence of characters in quotation marks, as in `"Asia"` or `"hello, world"` or `""`. String constants may contain
the escape sequences listed in Table 2-2.

A string constant can appear at almost any point in an expression:

| Position for string | Example                                  |
|---------------------|------------------------------------------|
| Participant         | `"Some service".message`                 |
| Message             | `OrderService."send notification"`       |
| Parameter           | `BookService.Search("ZenUML tutorials")` |
| Condition           | `if("Asia" == "Europe")`                 |

A numeric constant can be an integer like 1234, a decimal number like 3.14. It can only appear in the parameter
or condition position.

// TODO: Is assignee a type of variable or a type of expression?

**Variables.** Expressions can contain several kinds of variables: assignee, parameter and condition. A variable
does not need to be declared. Actually, it is not possible to declare a variable in ZenUML. ZenUML infers the
type of variable from the context in which it is used. For example, in
```
if (c1) {
    ret = A.method(p1, p2)
}
```
the variable `c1` is a condition, `ret` is an assignee, and `p1` and `p2` are parameters. 

**Built-In Variables.** Table 2-5 lists the built-in variables. Some of these we have already met; others will 
be used in this and later sections. These variables can be used in all expressions.

**Arithmetic Operators.** ZenUML provides the usual arithmetic operators: `+`, `-`, `*`, `/`, `%`.

**Comparison Operators.** Comparison expressions are those containing one of the six relational operators:
`==`, `!=`, `>`, `>=`, `<`, `<=`.  For example, `order != null` means the order is not null. They are often 
used as `conditions`. We can use it in an `if` statement:

```zenuml
if(order != null) {
  order.process()
}
```

**Logical Operators.** The logical operators: `&&` (and), `||` (or), `!` (not) are used to create logical
expressions by combining other expressions.

**Conditional Operators (Not supported).** The conditional operator `?:` is not supported in ZenUML v2.0.x.

**Assignment Operators.** The assignment operator `=` is used to assign a value to an assignee. For example,
```zenuml
ret = A.method(p1, p2)
```
Assigning a numeric to a variable will be treated as an error.
```zenuml
// !Error
a = 0
```
Assigning a string to a variable, the string will be treated as an expression (self message).
```zenuml
a = "A string will be treated as a self message"
```
Other assignment operators that care commonly found in programming languages, such as `+=`, `-=`, `*=`, `/=` 
are not supported in ZenUML v2.0.x.

**Summary of Expression.** Table 2-6 summarizes the expressions.

| Type              | Operators / symbols         | Example                           | UML Notion                                                |
|-------------------|-----------------------------|-----------------------------------|-----------------------------------------------------------|
| invocation        | `.`                         | A.method                          | Sync message `method` to A.                               |
| const (string)    | `"`                         | A.method("a string")              | Sync message `method("a string")` to A.                   |
| const (numeric)   | NA                          | A.method(3.14)                    | Sync message `method(3.14)` to A.                         |
| arithmetic        | `+` `-` `*` `/` `%`         | A.method(x+y)                     | Sync message `method(x+y)` to A.                          |
| assignment        | `=`                         | ret = A.method                    | Reply message `method` to caller.                         |
| conditional (AND) | `&&`                        | if(x && y) { A.method }           | Alt fragment with condition `x && y`.                     |
| conditional (OR)  | <code>&#124;&#124;</code>   | if(x &#124;&#124; y) { A.method } | Alt fragment with condition <code>x &#124;&#124;y</code>. |
| relational        | `<` `<=` `==` `!=` `>=` `>` | if(x >= y) { A.method }           | Alt fragment with condition `x >= y`.                     |
| in collection     | `in`                        | for(i in array) { A.get(i) }      | Loop fragment with condition `i in array`.                |
