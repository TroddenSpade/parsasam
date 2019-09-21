<template>
  <div class="container" v-if="!loading">
    <div class="share"></div>
    <component class="post" :is="dynamicPost" />
    <div class="latests" :class="{'stick':isStuck}"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  props: ["data"],
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
    if (!this.data) {
      axios
        .get(
          `https://blog.parsasam.ir/rest/api/read_one.php?id=${this.dynamicPost}`
        )
        .then(res => {
          this.post = res.data;
          this.loading = false;
        })
        .catch(err => console.log(err));
    } else {
      this.post = this.data;
      this.loading = false;
    }
  },
  data: function() {
    return {
      loading: true,
      dynamicPost: `${this.$route.params.id}`,
      isStuck: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.isStuck = true;
      } else {
        this.isStuck = false;
      }
    }
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #272838;

  display: flex;
  justify-content: center;
}

.share {
  background-color: red;
  width: 5vw;
  height: 30vh;
  position: fixed;
  left: calc(15vw);
  z-index: 1;
}

.latests {
  background-color: green;
  width: 20vw;
  height: 30vh;
  position: absolute;
  left: calc(80vw);
}

.stick {
  position: fixed;
  top: 0;
}

.post ::v-deep {
  width: 60vw;
  /*
Copyright (c) 2017 Chris Patuzzo
https://twitter.com/chrispatuzzo
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

  body {
    font-family: Helvetica, arial, sans-serif;
    font-size: 18px;
    line-height: 1.6;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    padding: 30px;
    color: #f564a9;
  }

  body > *:first-child {
    margin-top: 0 !important;
  }

  body > *:last-child {
    margin-bottom: 0 !important;
  }

  a {
    color: #d741a7;
    text-decoration: none;
  }

  a.absent {
    color: #cc0000;
  }

  a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 18px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
  }

  h2:first-child,
  h1:first-child,
  h1:first-child + h2,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }

  h1 tt,
  h1 code {
    font-size: inherit;
  }

  h2 tt,
  h2 code {
    font-size: inherit;
  }

  h3 tt,
  h3 code {
    font-size: inherit;
  }

  h4 tt,
  h4 code {
    font-size: inherit;
  }

  h5 tt,
  h5 code {
    font-size: inherit;
  }

  h6 tt,
  h6 code {
    font-size: inherit;
  }

  h1 {
    font-size: 60px;
    color: #f564a9;
    font-family: "Anton", sans-serif;
  }

  h2 {
    font-size: 35px;
    border-bottom: 1px solid #d741a7;
    color: #f564a9;
    font-family: "Anton", sans-serif;
  }

  h3 {
    font-size: 25px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    color: #777777;
    font-size: 14px;
  }

  p {
    font-size: 18px;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    font-size: 18px;

    margin: 15px 0;
  }

  hr {
    border: 0 none;
    color: #d741a7;
    height: 4px;
    padding: 0;
  }

  body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  body > h3:first-child,
  body > h4:first-child,
  body > h5:first-child,
  body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    position: relative;
    list-style: none;
    padding: 0;
  }

  /* Add indentation of nested lists and remove bottom margin */
  ul ul,
  ol ol {
    margin: 0;
  }

  /* Add general display for bullets and numbers */
  ul li,
  ol li {
    padding-left: 1em;
    margin: 0.25em 0;
  }

  ul li:before,
  ol li:before {
    position: absolute;
    left: 30px;
    color: #f564a9;
    font-family: georgia;
    font-weight: bold;
  }

  /* Style for bullet lists */
  ul li:before {
    content: "\2022";
    color: #f564a9;
  }

  /* Reset counter for each list */
  ol {
    counter-reset: listitem;
  }

  ol li {
    padding-left: 1.3em;
  }

  /* Style for numbered lists. Increment counter for each list item */
  ol li:before {
    counter-increment: listitem;
    content: counters(listitem, ".") ".";
  }

  ol ol li {
    padding-left: 2.3em;
  }

  /* TODO list */
  ul.todo li {
    padding-left: 1.3em;
  }

  ul.todo li:before {
    content: "\2610";
    color: #f564a9;
  }

  ul.todo li.good:before {
    content: "\2611";
    color: #156915;
  }

  ul.todo li.bad:before {
    content: "\2612";
    color: #971e1e;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul :first-child,
  ol :first-child {
    margin-top: 0;
  }

  ul :last-child,
  ol :last-child {
    margin-bottom: 0;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-size: 18px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }

  dl dt:first-child {
    padding: 0;
  }

  dl dt > :first-child {
    margin-top: 0;
  }

  dl dt > :last-child {
    margin-bottom: 0;
  }

  dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }

  dl dd > :first-child {
    margin-top: 0;
  }

  dl dd > :last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    padding: 0;
  }
  table tr {
    border-top: 1px solid #d741a7;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #d741a7;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #d741a7;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    clear: both;
    color: #f564a9;
    display: block;
    padding: 5px 0 0;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  code,
  tt {
    color: black;
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px;
  }

  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent;
  }

  .highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #d741a7;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre {
    background-color: #f8f8f8;
    border: 1px solid #d741a7;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px;
  }

  pre code,
  pre tt {
    background-color: transparent;
    border: none;
  }
}
</style>