# jest-extended 3.2.2 typing problem

## Usage
1. run `npm install`
2. run `npm test`

Compilation fails with:

```
    test.spec.ts:17:7 - error TS2322: Type 'void' is not assignable to type 'number | undefined'.

    17       baz: expect.toBeNumber()
             ~~~

      test.spec.ts:5:3
        5   baz?: number;
            ~~~
        The expected type comes from property 'baz' which is declared here on type 'Foo'
```

3. downgrade `jest-extended` to `3.2.0`
4. run `npm test` - test passes.