# Project Marvel

## Setup

### Create docker image

```
docker image build -t marvel .
```

### Create docker container

```
docker container run --publish 8000:8080 --name marvel-container marvel
```

