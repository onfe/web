Flexbox is the go-to method for fluid and responsive layouts. With it's excellent configurability and pretty darn [good support](https://caniuse.com/#feat=flexbox), it's being used anywhere you can stash a `<div>`. It's completely direction-agnostic, which is incredibly useful when building components that need to stretch, centre and overflow in complex layouts. When supplemented with CSS grid, it forms a pillar of modern web design and is incredibly powerful.

# You've got my `flex-`attention

When creating Picto, a real-time chat application, we needed a way to display a message history that put the most recent item to the bottom of a scrollable chat container. When a new message arrives, modern messaging clients are expected to behave a particular way:

- Display messages with the most new ones arriving at the bottom.
- If I'm scrolled to the bottom and a new one arrives, keep me at the bottom so I can see the latest update.
- If I've scrolled up to view an earlier message, and a new one arrives, don't scroll me away.

Like most people facing a similar predicament, we immediately flocked to `flex-direction: column-reverse`. The markup is simple, concise and understandable.

```html
<div class="flex-container">
    <!-- Note that newest elements are prepended, not appended -->
    <div class="flex-item message">I do!</div>
    <div class="flex-item message">Who wants brownies?</div>
</div>
```

```css
.flex-container {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
}

.flex-item {
    /* prevent messages getting squished and stretched */
    flex: 0;
}
```

Better still, it worked like a charm, no JavaScript needed. When I'm at the bottom and a new element is prepended, I can see it immediately and stay in the flow. If I'm catching up on something I missed, I don't get jolted around. Flexbox and `flex-direction: column-reversed` saved the day.

# The fall

We pushed our solution to production and sat back to admire our work. It was so simple and elegant, with no need for the JS powered scrolling of yesteryear.

The thing with something so wonderful and great in the world of web development is it must be too good to be true. A good friend of mine took the site for a test-drive, and left one rather confused remark: "I can't scroll backwards".

> It all worked so perfectly, until it didn't.

Firefox has a rather fickle relationship with Flexbox. For starters it doesn't overflow if some arrangement of itself, it's parent and the flex-items don't have correctly set min-heights (although this is somehow [intended behaviour](https://drafts.csswg.org/css-flexbox/#min-size-auto). Go figure).

After plastering `min-height: 0;` on every possible variation of the container, parents and children; accelerating the recession of my hairline and wasting countless hours that could be spent elsewhere: no dice. The container still wouldn't scroll, and to make things worse the scrollbar would stick around, unscrollable, taunting me and taking up space.

# The awakening

If you pop over to check the support for `flex-direction`, you'll see some [rather interesting footnotes](https://caniuse.com/#feat=mdn-css_properties_flex-direction) scattered all over the Firefox column.

> Does not support overflow when using `*-reverse`. See [bug 1042151](https://bugzil.la/1042151) for more info.

Bug [1042151](https://bugzil.la/1042151) has been open for 6 years and doesn't seem like it'll be getting a fix anytime soon. As the questions littered across StackOverflow demonstrate, this seems to be a fairly common use case and issue to run into. Almost every answer however, demonstrates some wild JavaScript-heavy alternative or a workaround that looses the distinct benefit of the sticky-scrolling.

# The solutions

With our hearts broken and dreams of simple markup ruined, we returned to the drawing board and came up with some rather interesting solutions.

## Flip it, then flip it again

todo

## Overflow anchors



