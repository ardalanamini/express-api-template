#!/bin/bash

until [ $(mongo --eval 'db.runCommand("ping").ok' database:27017/api --quiet) -gt 0 ]; do
  echo "Waiting for MongoDB ..."
  sleep 1
done

echo mongodb-replica-setup.sh time now: $(date +"%T")

mongo --host database:27017 <<EOF
  var cfg = {
    "_id": "rs0",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "database:27017",
        "priority": 2
      }
    ]
  };
  rs.initiate(cfg, { force: true });
  rs.reconfig(cfg, { force: true });
EOF
