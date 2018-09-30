# sh curl-scripts/json/show.sh
curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  # --data '{
  #   "game": [
  #     {
  #       "id": "'"${ID}"'",
  #       "cells": "'"${CELLS}"'",
  #       "over": "'"${OVER}"'",
  #       "player_x": {
  #         "id": "'"${ID}"'",
  #         "email": "'"${EMAIL}"'"
  #       },
  #       "player_o": {
  #         "id": "'"${ID}"'",
  #         "email": "'"${EMAIL}"'"
  #       }
  #     }
  #   ]
  # }'

  echo
