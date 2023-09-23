export default function arraySkills({ special }) {
  const result = [];
  for (
    const {
      id, name, icon, description = 'Описание недоступно',
    } of special) {
    const obj = {};
    obj.id = id;
    obj.name = name;
    obj.icon = icon;
    obj.description = description;
    result.push(obj);
  }
  return result;
}
