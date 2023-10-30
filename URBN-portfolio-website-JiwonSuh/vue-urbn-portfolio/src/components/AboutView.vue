<script setup>
</script>

<template>
    <div class="about-wrapper">
        
        <div class="grid-wrapper">
            <div class="grid">
                <div class="block">
                    <h1>Hi, I'm Jiwon <span class="smaller-font">She/her, name pronounced <span class="red">G-1</span> </span> </h1>
                    <p>I was born and raised in <span class="red">South Korea, Seoul</span> </p>
                    <p>I am an immigrant based in <span class="red">Maryland</span> </p>
                </div>
            </div>
            
            <div class="grid">
                <div class="block right">
                    <p>It's been great years to explore the culture of America and meet people with many different backgrounds.</p>
                </div>
            </div>

            <div class="grid">
                <div class="block block-gap">
                    <p>It also has been tough years to adjust myself to the completely different culture.</p>
                    <p class="red">But all those tough experiences taught me so many things and shaped who I am now. </p>
                    <p>And I’m glad that I get to have so much experiences outside of my home country.</p>
                </div>
            </div>

            <div class="grid">
                <div class="block right block-gap">
                    <p> My journey to learning <span class="red">web development</span> started in 2021, the year I was introduced Information System major in Montgomery college.</p>
                    <p>I learned C++, JAVA, and Object-Oriented Programming at Montgomery College.</p>
                    <p>And then I was introduced HTML, CSS, and JS at the University of Maryland at College Park.</p>
                </div>
            </div>
            
            <div class="grid">
                <div class="block block-gap">
                    <p class="red">Building a website is fun and meaningful to me because I get to contribute to websites that people will use every day. </p>
                    <p>I always wanted to produce something that is meaningful and useful.</p>
                </div>
            </div>

            <div class="grid">
                <div class="block right block-gap">
                    <p class="red">And this is why I have been spending my own spirit time to learn the fundamentals of web development, including the history of Web pages and IoT as well as User-Centered designs and how web application works (client-server, http, storing data, AWS).</p>
                    <p>To further improve my skill, I stared learning <span class="red">Vue.js</span>, which I will be using it for the summer internship if I get accepted.</p>
                </div>
            </div>

            <div class="grid">
                <div class="block block-gap">
                    <p><span class="red">In the next 5 years</span>, my goal is to KNOW ALMOST EVERYTHING about web development, and become a team lead.</p>
                    <p>Also, I will love to work for URBN since I love its brands - Urban Outfitters, Free People, and Anthropologie.</p>
                    <p>I am so excited that I discovered that URBN has the summer internship every year, and there is an open position for web developers.</p>
                </div>
            </div>

            <div class="grid">
                <div class="block span-all">
                    <h1>Hope to see you next year!</h1>
                </div>
            </div>
        </div>

        
        


    </div>
</template>

<style scoped>
    .smaller-font {
        font-size: 13px;
    }

    .red {
        color: #F57474;
    }

    h1 {
        margin-bottom: 20px;
    }
    .about-wrapper {
        width: 1024px;
        margin: 0 auto;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
    }

    .grid-wrapper,
    .grid {
        grid-column-gap: 20px;
        grid-column-end: span 12;
        display: grid;
        grid-template-columns: repeat(12,1fr);
        margin: 0 auto;
        max-width: 1561px;
        padding-left: 60px;
        padding-right: 60px;
        margin-bottom: 1em;
    }

    .block {
        position: relative;
        grid-column-end: span 6;
        margin-top: 2em;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

    }
    
    .block-gap {
        gap: 1.2em;
    }
    .right {
        grid-column-start: 7;
        
    }

    .span-all {
        grid-column-end: span 12;
        
    }
</style>