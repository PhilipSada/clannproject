<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;
    public $content;
    public $token;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($content, $token)
    {
        $this->content = $content;
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $email = $this->subject('Reset Clann Password')
        ->view('mails.forgotPassword');

        return $email;
    }
}
