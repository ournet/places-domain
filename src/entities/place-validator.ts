import * as Joi from "joi";
import { PlaceValidDeleteFields, Place } from "./place";
import { JoiEntityValidator } from "@ournet/domain";

export class PlaceValidator extends JoiEntityValidator<Place> {
  constructor() {
    super({ createSchema, updateSchema });
  }
}

const placeNameMaxLength = 200;
const placeFeatureClasses = ["A", "H", "L", "P", "R", "S", "T", "U", "V"];
const adminCodeMaxLength = 50;

const schema = {
  id: Joi.string().regex(/^\d+$/),
  name: Joi.string().trim().min(1).max(placeNameMaxLength),
  asciiname: Joi.string().trim().min(1).max(placeNameMaxLength),
  names: Joi.string().trim(),
  latitude: Joi.number().precision(4),
  longitude: Joi.number().precision(4),
  featureClass: Joi.string().allow(placeFeatureClasses),
  featureCode: Joi.string().uppercase().min(1).max(10),
  countryCode: Joi.string().length(2).lowercase(),
  admin1Code: Joi.string().trim().min(1).max(adminCodeMaxLength),
  admin2Code: Joi.string().trim().min(1).max(adminCodeMaxLength),
  admin3Code: Joi.string().trim().min(1).max(adminCodeMaxLength),
  population: Joi.number().integer().min(0),
  elevation: Joi.number(),
  dem: Joi.number(),
  timezone: Joi.string(),
  wikiId: Joi.string().regex(/^Q\d+$/),
  updatedAt: Joi.string().isoDate().raw()
};

const createSchema = {
  id: schema.id.required(),
  name: schema.name.required(),
  asciiname: schema.asciiname.required(),
  names: schema.names,
  latitude: schema.latitude.required(),
  longitude: schema.longitude.required(),
  featureClass: schema.featureClass.required(),
  featureCode: schema.featureCode.required(),
  countryCode: schema.countryCode.required(),
  admin1Code: schema.admin1Code,
  admin2Code: schema.admin2Code,
  admin3Code: schema.admin3Code,
  population: schema.population,
  elevation: schema.elevation,
  dem: schema.dem,
  timezone: schema.timezone.required(),
  wikiId: schema.wikiId,
  updatedAt: schema.updatedAt
};

const updateSchema = Joi.object()
  .keys({
    id: schema.id.required(),
    set: Joi.object().keys({
      name: schema.name,
      asciiname: schema.asciiname,
      names: schema.names,
      latitude: schema.latitude,
      longitude: schema.longitude,
      featureClass: schema.featureClass,
      featureCode: schema.featureCode,
      countryCode: schema.countryCode,
      admin1Code: schema.admin1Code,
      admin2Code: schema.admin2Code,
      admin3Code: schema.admin3Code,
      population: schema.population,
      elevation: schema.elevation,
      dem: schema.dem,
      timezone: schema.timezone,
      wikiId: schema.wikiId,
      updatedAt: schema.updatedAt
    }),
    delete: Joi.array().items(Joi.string().valid([PlaceValidDeleteFields]))
  })
  .or("delete", "set");
