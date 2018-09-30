# sh curl-scripts/json/update.sh
curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": $(event.target.id),
        "value": $(event.target.innerText)
      },
      "over":
    }

  echo
