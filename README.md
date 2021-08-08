# lerolero-api

## instalation

after cloning repo run this on root dir:

```bash
yarn install
```

and run with:

```bash
yarn start
```

## API Methods


### GET `/`

returns a simple sentence using the default sentences list. 

### GET `/:id`

returns a simple sentence using the `:id` to select a sentences list.

available sentences list implemented:

- `defaults`: default sentences list
- `developer`: a sentences list with IT/dev context
- `psychoanalyst`: a sentences list that a psychoanalyst would say

fell confortable to add more sentences list, it's really easy, just check `src/sentences` directory to check how it works.

## TODO

- get sentences from data base
- build a collaborative system to submit new sentences list (make it agnostic about languages)
- like and dislike for sentences list
