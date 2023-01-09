import "jest-extended";

interface Foo {
  bar?: string;
  baz?: number;
}

describe('jest-extended typings', () => {

  it("nested asymmetric matcher", async () => {
    const foo: Foo = {
      baz: 42,
      bar: "bar"
    }
    expect(foo).toStrictEqual(expect.objectContaining<Foo>({
      bar: expect.stringContaining("bar"),
      baz: expect.toBeNumber()
    }));
  });
});