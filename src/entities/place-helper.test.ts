import test from "ava";
import { PlaceHelper } from "./place-helper";

test("formatName", (t) => {
  t.is(PlaceHelper.formatName("Name", "en"), "Name[en]");
  t.is(PlaceHelper.formatName("Name", "RU"), "Name[ru]");
  t.is(PlaceHelper.formatName("Name A    ", "EN"), "Name A[en]");
});

test("formatNames", (t) => {
  t.is(PlaceHelper.formatNames([]), "");
  t.is(PlaceHelper.formatNames([{ name: "Name", lang: "ro" }]), "Name[ro]");
  t.is(
    PlaceHelper.formatNames([
      { name: "Name", lang: "ro" },
      { name: "Name P", lang: "RO   ", isPreferred: true },
      { name: "Name 2", lang: "Ro" },
      { name: "NO name", lang: "no" }
    ]),
    "Name P[ro]|Name[ro]|Name 2[ro]|NO name[no]"
  );
});

test("parseName", (t) => {
  t.throws(() => PlaceHelper.parseName("Name"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseName("Name[RO]"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseName("Name[R]"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseName("Name[RO"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseName("NameRO]"), /'name' is invalid/);
  t.is(PlaceHelper.parseName("Name[en]").name, "Name");
  t.is(PlaceHelper.parseName("Name[en]").lang, "en");
});

test("parseNames", (t) => {
  t.throws(() => PlaceHelper.parseNames("Name"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseNames("Name[ro]|"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseNames("Name[R]"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseNames("Name[RO|"), /'name' is invalid/);
  t.throws(() => PlaceHelper.parseNames("NameRO]|name"), /'name' is invalid/);
  t.is(PlaceHelper.parseNames("Name[en]").length, 1);
  t.is(PlaceHelper.parseNames("Name[en]|Name 2[ro]").length, 2);
});
