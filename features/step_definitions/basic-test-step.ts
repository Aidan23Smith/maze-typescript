
import { When, Then } from "@cucumber/cucumber";
import * as assert from "assert";

interface MyWorld {
    whatIHeard: number;
}

When("the greeter says hello", function (this: MyWorld) {
    this.whatIHeard = 1;
});

Then(
    "I should have heard",
    function (this: MyWorld) {
        assert.equal(this.whatIHeard, 1);
    }
);