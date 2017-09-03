#!/usr/bin/env bash
new_arr=${*:2:2}
# new_arr="${*:2:2}"
new_arr=(I am $new_arr and $4)
echo ${new_arr[@]}
