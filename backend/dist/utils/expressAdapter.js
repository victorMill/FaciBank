"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = adaptRoute;
function adaptRoute(controllerFn) {
    return async (req, res, next) => {
        try {
            const result = await controllerFn({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            res.json(result);
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=expressAdapter.js.map