# Project Marvel

## Setup

### Create docker image

```
docker image build -t backend .
```

### Create docker container

```
docker container run --publish 8000:8000 --name backend-container backend
```

