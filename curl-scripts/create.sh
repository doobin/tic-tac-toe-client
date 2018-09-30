# sh curl-scripts/json/create.sh
curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  # --data '{
  #   "games": [
  #     {
  #       "id": "'"${ID}"'",
  #       "cells": "'"${CELLS}"'",
  #       "over": "'"${OVER}"'",
  #       "player_x": {
  #         "id": "'"${ID}"'",
  #         "email": "'"${EMAIL}"'"
  #       },
  #       "player_o": "null"
  #     }
  #   }
