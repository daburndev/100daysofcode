# Day 8

When I'm away from css awhile and i come back to it and it's a nightmare. Took me 
a couple minutes to recall it. So <br>
<Strong>CRUCIAL THING IN CSS IS FOCUS ON CONCEPTS, NOT MEMORIZING THE PROPERTIES.</strong>
<br>

# Responsiv CSS & Flexbox

working out with display:flex <br>
<h3>flex-direction</h3> : row, row-reverse, column, column-reverse <br>
<h3>justify-content</h3> : flex-start, flex-end, center, space-between, space-around, space-evenly <br>
<h3>flex-wrap</h3> : wrap, wrap-reverse<br>
<h3>align-items</h3> : baseline,center,flex-start,flex-end<br>
<h3>align-content</h3> : flex-start, flex-end, center, space-between, space-around <br>
<h3>align-self</h3> : for the individual element in the container. <br>
<br>


# Flex-Basis, Grow, & SHrink

<h3>Flex Sizing Properties</h3> 
<ul>
    <li>Flex-Basis<p>Defines the initial size of an eleemnt before additional space is distributed</p></li>
    <li>Flex-Grow<p>Controls the amount of available space an element should take up. Accepts a unit-less number value.</p></li>
    <li>Flex-Shrink<p>If items are larger than the container, they shrink according to flex-shrink.</p></li>
</ul>
<br>

# Flex Shorthand

https://developer.mozilla.org/en-US/docs/Web/CSS/flex

/* Keyword values */ <br>
flex: auto;<br>
flex: initial;<br>
flex: none;<br>

/* One value, unitless number: flex-grow
flex-basis is then equal to 0. */ <br>
flex: 2;<br>

/* One value, width/height: flex-basis */<br>
flex: 10em;<br>
flex: 30%;<br>
flex: min-content;<br>

/* Two values: flex-grow | flex-basis */<br>
flex: 1 30px;<br>

/* Two values: flex-grow | flex-shrink */<br>
flex: 2 2;<br>

/* Three values: flex-grow | flex-shrink | flex-basis */<br>
flex: 2 2 10%;<br>

/* Global values */<br>
flex: inherit;<br>
flex: initial;<br>
flex: revert;<br>
flex: revert-layer;<br>
flex: unset;<br>

# Responsive Design & Media Queries

Make a single website that is responsive to the device that is being displayed on <br>
https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Browser_compitability <br>
Building a responsive nav <br>
