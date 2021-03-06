<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Philipe Sada',
            'email' => 'sada_phillip@yahoo.com',
            'password' => Hash::make('12345678'),
            'is_admin'=>1,
            'email_verified_at' => now(),
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);
        DB::table('users')->insert([
            'name' => 'Victor Sada',
            'email' => 'vctrsada@gmail.com',
            'password' => Hash::make('12345678'),
            'is_admin'=>1,
            'email_verified_at' => now(),
            'created_at'=>Carbon::now(),
            'updated_at'=>Carbon::now()
        ]);

    }
}
