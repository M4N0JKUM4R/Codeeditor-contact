<?php

/**
 * Plugin Name:       Code Editor Contact Form
 * Plugin URI:        https://manojkumar.online
 * Description:       Connect to Telegram bot with Code editor UI.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Manoj Kumar
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       code-editor-contact
 */

if( !defined("ABSPATH") ) {
    exit;
}

function code_editor_scripts() {
    
    global $post;
    if(has_shortcode($post->post_content, "code-editor-contact")) {
        wp_enqueue_script( 'prism', plugin_dir_url( __FILE__ ) . 'assets/js/prism.js', array('jquery'), '1.0.0', true);
        wp_enqueue_script( 'shepherd', "https://cdn.jsdelivr.net/npm/shepherd.js@8.3.1/dist/js/shepherd.min.js", array('jquery'), '1.0.0', true);
        wp_enqueue_script( 'typewriter', "https://unpkg.com/typewriter-effect@latest/dist/core.js", array('jquery'), '1.0.0', true);
        wp_enqueue_script( 'code-editor-contact', plugin_dir_url( __FILE__ ) . 'assets/js/script.js', array('jquery'), '1.0.0', true);
    }
}

add_action( "wp_enqueue_scripts", "code_editor_scripts" );


function code_editor_styles() {
    
    global $post;
    if(has_shortcode($post->post_content, "code-editor-contact")) {    
        wp_enqueue_style( 'material-icons', "https://fonts.googleapis.com/icon?family=Material+Icons", array( 'arter-style' ), '1.0.0' );
        wp_enqueue_style( 'shepherd', "https://cdn.jsdelivr.net/npm/shepherd.js@8.3.1/dist/css/shepherd.css", array(), '1.0.0' );
        wp_enqueue_style( 'prism', plugin_dir_url( __FILE__ ) . 'assets/css/prism.css', array(), '1.0.0' );
        wp_enqueue_style( 'code-editor-contact', plugin_dir_url( __FILE__ ) . 'assets/css/style.css', array(), '1.0.0' ); 
    }
}

add_action( "wp_enqueue_scripts", "code_editor_styles" );

function code_editor_contact_shortcode() {
    ob_start();
    include_once( plugin_dir_path( __FILE__ ) . 'templates/code-editor-contact.php' );
    return ob_get_clean();
}

add_shortcode( "code-editor-contact", "code_editor_contact_shortcode" );