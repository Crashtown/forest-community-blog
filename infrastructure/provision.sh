#!/bin/bash

cd ansible

ansible-playbook -i inventories/prod electrostation.yml
