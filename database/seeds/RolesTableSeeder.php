<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'title' => 'admin',
          
        ]);
        DB::table('roles')->insert([
            'title' => 'tenant',

        ]);
        DB::table('roles')->insert([
            'title' => 'landlord',

        ]);
        DB::table('role_user')->insert([
            'role_id' => 1,
            'user_id' => 1,

        ]);
        DB::table('role_user')->insert([
            'role_id' => 1,
            'user_id' => 2,

        ]);
    }
}
