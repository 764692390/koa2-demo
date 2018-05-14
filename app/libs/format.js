import Sequelize from 'sequelize';

/**
 * return object 定义返回格式
 * errno
 * errmsg
 * data
 */
const res = (data) => {
  const info = {
    "errno":"0",
    "errmsg":"success",
  };
  
  if (data) {
    info.data = data.data;
  }
  return info;
};

const err = error => {
  if (error instanceof Sequelize.ValidationError) {
    return { errno: 1003, errmsg: error.errors[0].message };
  } else {
    return { errno: 1004, errmsg: error.message };
  }
};

export { res, err };
