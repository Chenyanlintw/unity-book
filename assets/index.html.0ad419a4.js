import{_ as n,d as s}from"./app.ac82a17c.js";const a={},p=s(`<h1 id="unity-\u57FA\u790E" tabindex="-1"><a class="header-anchor" href="#unity-\u57FA\u790E" aria-hidden="true">#</a> Unity \u57FA\u790E</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Coin</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">GridObject</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">float</span></span> Speed <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name"><span class="token keyword">float</span></span> ry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u6301\u7E8C\u65CB\u8F49</span>
        ry <span class="token operator">+=</span> Speed <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span>
        transform<span class="token punctuation">.</span>rotation <span class="token operator">=</span> Quaternion<span class="token punctuation">.</span><span class="token function">Euler</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> ry<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTriggerEnter</span><span class="token punctuation">(</span><span class="token class-name">Collider</span> other<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// \u78B0\u649E\u5230\u73A9\u5BB6\uFF0C\u6D88\u5931</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;Player&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">Destroy</span><span class="token punctuation">(</span>gameObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,2);function e(t,c){return p}var l=n(a,[["render",e],["__file","index.html.vue"]]);export{l as default};
