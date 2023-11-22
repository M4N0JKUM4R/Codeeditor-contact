<?php 

    if(!defined("ABSPATH")) {die();}
    $data = get_option( 'code_editor_contact_data' );
    $data = json_decode($data, true);

?>

<div class="code-editor-wrapper" id="contact-editor">
        <div class="top-bar">
            <div class="search-field">
                <i class="material-icons">search</i>
                <div class="search-text">Contact</div>
            </div>
            <div class="tabs">
                <div class="tab">
                    <span class="tab-text">assets.css</span>
                    <i class="material-icons">close</i>
                </div>
                <div class="tab active contact-tab">
                    <span class="tab-text">contact.js</span>
                    <i class="material-icons">edit</i>
                </div>
                <div class="tab">
                    <span class="tab-text">finance.php</span>
                    <i class="material-icons">close</i>
                </div>
                <div class="tab">
                    <span class="tab-text">memories.sql</span>
                    <i class="material-icons">close</i>
                </div>
            </div>
        </div>
        <div class="sidebar">
            <div class="folder">
                <div class="folder-icon">
                    <i class="material-icons">keyboard_arrow_down</i>
                    <i class="material-icons">folder_open</i>
                </div>
                <div class="folder-name">
                    <span>Manojkumar.online</span>
                </div>
            </div>
            <div class="folder-left-2x folder not-authorized">
                <div class="folder-icon">
                    <i class="material-icons">chevron_right</i>
                    <i class="material-icons">folder_open</i>
                </div>
                <div class="folder-name">
                    <span>History</span>
                </div>
            </div>
            <div class="folder-left-2x folder">
                <div class="folder-icon">
                    <i class="material-icons">keyboard_arrow_down</i>
                    <i class="material-icons">folder_open</i>
                </div>
                <div class="folder-name">
                    <span>Contact</span>
                </div>
            </div>
            <div class="folder-left-3x folder">
                <div class="folder-icon">
                    <i class="material-icons">keyboard_arrow_down</i>
                    <i class="material-icons">folder_open</i>
                </div>
                <div class="folder-name">
                    <span>Personal</span>
                </div>
            </div>
            <div class="folder-left-3x folder">
                <div class="folder-icon">
                    <i class="material-icons">keyboard_arrow_down</i>
                    <i class="material-icons">folder_open</i>
                </div>
                <div class="folder-name">
                    <span>Work</span>
                </div>
            </div>
            <div class="folder-left-3x folder file-list-folder">
                <div class="folder-item">
                    <div class="folder-icon">
                        <i class="material-icons js-icon"><img src="<?php echo plugins_url("codeeditor-contact/assets/images/javascript.svg") ?>" /></i>
                    </div>
                    <div class="folder-name">
                        <span>contact.js</span>
                    </div>
                </div>
                <div class="folder-item">
                    <div class="folder-icon">
                        <i class="material-icons css-icon">css</i>
                    </div>
                    <div class="folder-name">
                        <span>assets.css</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="code-area active" id="contact-js">
<pre class="language-js pre-1 line-numbers">
<span class="keyword">import</span> <span class="variables">Conversation</span> <span class="keyword">from</span> <span class="string">"messageLogic"</span>;

<span class="keyword">const</span> <span class="variables">details</span> <span class="keyword">=</span> {
    <span class="object-key">name:</span> "<input class="get-name" type="text" />",
    <span class="object-key">contact:</span> "<input class="get-email" type="email" disabled placeholder="Mail/Phone" />"
    <span class="object-key">purpose:</span> "<input class="get-subject" type="text" disabled placeholder="Work, Personal, Movies, Music, Games..." />",
    <span class="object-key message">message:</span> <textarea class="get-message" disabled></textarea>
}

<span class="variables">createConversation();</span>

<span class="keyword">let</span> <span class="variables">promise</span> = <span class="keyword">new</span> <span class="variables">Promise((resolve, reject)</span> <span class="keyword">=></span> {
    <span class="keyword">if</span><span class="variables">(brain(message)</span> <span class="keyword">===</span> <span class="string">"Interesting"</span>) {
        <span class="variables">resolve(</span><span class="string">"Wow! I am eager to meet/work together"</span><span class="variables">)</span>
    } <span class="keyword">else</span> {
        <span class="variables">reject</span>(<span class="string">"Sorry! You are too good for me"</span>)
    }
}

<span class="keyword">const</span> <span class="variables">brain</span> = <span class="keyword">async</span> (<span class="variables">message</span>) {
    <span class="keyword">let</span> <span class="variables">inactiveHours</span>;
    <span class="keyword">let</span> <span class="variables">initiate</span> = <span class="keyword">await</span> <span class="variables">fetch</span>(<span class="string">"https://hiddenIP/"</span>)
    <span class="variables">setTimeOut</span>(() => {
        <span class="variables">processConversation();</span>
        <span class="keyword">return</span> <span class="variables">processedResult</span>;
    }, <span class="variables">inactiveHours</span>)
}
</pre>
</div>
       
<div class="console">
    <div class="console-inner">
        <div class="user-address">
            <div class="path">guest@manojkumar.online ></div>
        </div>
        <div class="console-messages">

        </div>
    </div>
</div>
<div class="code-editor-footer">
    <div class="clear-console">
        <i class="material-icons">
            layers_clear
        </i>
    </div>
    <div class="mail"> 
        <div class="title">Emergency exit:</div>
        <a href="mailto:me@manojkumar.online">
            <i class="material-icons">
                mail
            </i>
        </a>
    </div>
</div>