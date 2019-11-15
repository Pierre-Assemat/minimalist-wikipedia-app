# Build Setup

### Create docker image

```
docker image build -t frontend .
```

### Create docker container

```
docker container run -p 8080:8080  --rm  --name frontend-container frontend
```

# Start

The application is now accessible under `localhost:8080`.