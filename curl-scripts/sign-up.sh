# sh curl-scripts/json/sign-up.sh

# don't use a password you use for any real websites!
curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'${EMAIL}'",
      "password": "'${PASSWORD}'",
      "password_confirmation": "'${PASSWORD}'"
    }
  }'

echo
