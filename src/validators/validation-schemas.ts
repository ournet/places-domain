
import * as Joi from 'joi';

const placeNameMaxLength = 200;
const placeFeatureClasses = ['A', 'H', 'L', 'P', 'R', 'S', 'T', 'U', 'V'];

const wikiIdRegex = /^Q\d+$/;


const createPlaceObj = Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().trim().min(1).max(placeNameMaxLength).required(),
    asciiname: Joi.string().trim().min(1).max(placeNameMaxLength).required(),
    names: Joi.string().trim(),
    latitude: Joi.number().precision(4).required(),
    longitude: Joi.number().precision(4).required(),
    featureClass: Joi.string().allow(placeFeatureClasses).required(),
    featureCode: Joi.string().uppercase().min(1).max(10).required(),
    countryCode: Joi.string().length(2).lowercase().required(),
    admin1Code: Joi.string().trim().min(1).max(10),
    admin2Code: Joi.string().trim().min(1).max(10),
    admin3Code: Joi.string().trim().min(1).max(10),
    population: Joi.number().integer().min(0),
    elevation: Joi.string().trim().min(1).max(10),
    dem: Joi.number(),
    timezone: Joi.string().required(),
    wikiId: Joi.string().regex(wikiIdRegex),
    updatedAt: Joi.number().min(0)
});

export const createPlaceSchema = createPlaceObj.required();

const updatePlaceObj = Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    name: Joi.string().trim().min(1).max(placeNameMaxLength),
    asciiname: Joi.string().trim().min(1).max(placeNameMaxLength),
    names: Joi.string().trim(),
    latitude: Joi.number().precision(4),
    longitude: Joi.number().precision(4),
    featureClass: Joi.string().allow(placeFeatureClasses),
    featureCode: Joi.string().uppercase().min(1).max(10),
    countryCode: Joi.string().length(2).lowercase(),
    admin1Code: Joi.string().trim().min(1).max(10),
    admin2Code: Joi.string().trim().min(1).max(10),
    admin3Code: Joi.string().trim().min(1).max(10),
    population: Joi.number().integer().min(0),
    elevation: Joi.number(),
    dem: Joi.number(),
    timezone: Joi.string(),
    wikiId: Joi.string().regex(wikiIdRegex),
    updatedAt: Joi.number().min(0).required()
});

export const updatePlaceSchema = updatePlaceObj.required();
