Q/ What is JSX?
A/ It's a syntax that sort of merges the markup and the logic. It looks like HTML but it's not HTML. It stands for JavaScript XML syntax

Q/ Superpowers of JSX?
A/ These are the superpowers of JSX:
1. Markup and logic are written together
2. Declarative Syntax
3. Component composition

Q/  Role of type attribute in script tag? What options can I use there?

A/ type attribute in src tag indicates the browser type of script content and how to execute it. These are possible values of the type attribute

1. default/ text:  Javascrip
2. module: The script content is treated like and ES6 module which allows us to import and export files

Q/ `{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent></TitleComponent>}` in JSX

A/ `{TitleComponent}` : Here TitleCompoent is a JS expression, or a react element(which is also JS expression)
`{<TitleComponent />}` :  This is also a JS expression , inside it is a component named title component.
`{<TitleComponent></TitleComponent>}` : This is a JS expression, inside it is a compoent named title component.