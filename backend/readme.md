# Build Setup

### Create docker image

```
docker image build -t backend .
```

### Create docker container

```
docker container run -p 8000:8000 --rm --name backend-container backend
```

# Start

The server is now listening at `localhost:8000`.