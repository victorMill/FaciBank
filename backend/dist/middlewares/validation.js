"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const zod_1 = require("zod");
function validate(schemas) {
    return (req, res, next) => {
        try {
            if (schemas.body)
                schemas.body.parse(req.body);
            if (schemas.params)
                schemas.params.parse(req.params);
            if (schemas.query)
                schemas.query.parse(req.query);
            next();
        }
        catch (err) {
            if (err instanceof zod_1.ZodError) {
                res.status(400).json({
                    error: 'erro da validação da request',
                    details: err.message,
                });
            }
        }
    };
}
//# sourceMappingURL=validation.js.map