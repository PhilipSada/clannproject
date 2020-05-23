<?php

namespace App\Listeners;

use App\Events\AwaitingProductReviewEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ProductReviewListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  AwaitingProductReviewEvent  $event
     * @return void
     */
    public function handle(AwaitingProductReviewEvent $event)
    {
        // return $event;
        dd($event);
    }
}
