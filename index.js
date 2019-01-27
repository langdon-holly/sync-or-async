'use strict';

exports.sync
= (iter, value) => {while (!({value} = iter.next(value)).done); return value;};

exports.async
= async (iter, value) =>
  { while (!({value} = iter.next(value)).done) value = await value;
    return value;};
