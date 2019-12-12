# README
Hello and Welcome to Conflict Manager. This project was made by Shawn Huang Fernandes and myself. 
This project was created for our Mod 3 project at Flatiron School over the course of a week.
if you have any questions about the project feel free to message me.

### System dependencies:

- Ruby -> 2.6.3
- Rails -> 6.0.1
- pg -> >= 0.18 < 2.0
- Puma -> 4.1
- Rack-cors
- Byebug
- Spring

### Configuration:

- PostgreSQL
- Rails

## Schema

### BloodOaths

```
  create_table "bloodoaths", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "character_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["character_id"], name: "index_bloodoaths_on_character_id"
    t.index ["user_id"], name: "index_bloodoaths_on_user_id"
  end
```
### Characters

```
  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.boolean "dodgeFlag"
    t.integer "attack"
    t.integer "defense"
    t.integer "agility"
    t.integer "health"
    t.string "icon_img"
    t.string "idle_gif"
    t.string "defeated_gif"
    t.string "icon_audio_url"
    t.integer "wins_required"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
  ```
### Users

  ```
  create_table "users", force: :cascade do |t|
    t.string "username"
    t.integer "wins"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
```
## User stories:
- as a user, I should be able to create/login to account
- as a user, I should be able to choose a character to play as
- as a user, I should be able to choose a background
- as a user, I should be able to start a fight and either win or lose
- as a user, I should be able to continue fighting as many times as I'd like
- as a user, I should be able to unlock more characters depending on how many times I win

## Installation Guide:
**NOTE:** Make sure that you already have rails and postgresql installed
- Fork and clone this repository
- Open the repository in your IDE of choice
- Run `bundle install` in console to insure you have all the required gems
- Run `rails db:create` to create the Postgres Database
- Run `rails db:migrate` in console to create the schema
- Run `rails db:seed` in console to seed the data
- Run `rails server or rails s` to start the server on a localhost

## If you wish to conribute to the project you may do so by following the proceeding steps:
- Follow steps one and two of the Install Instructions section.
- Create your own branch to work on.
- Follow standard Ruby convention in your code.
- Submit any changes you've made to your branch as a pull request on the master to be reviewed.

## Copyright Information:
[MIT License](https://opensource.org/licenses/MIT)

**Copyright 2019, Alfonso Pruneda and Shawn Huang Fernandes**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
