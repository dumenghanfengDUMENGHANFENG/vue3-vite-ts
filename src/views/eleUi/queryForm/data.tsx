// 使用方法抛出为了配合刷新页面刷新,直接抛出一个对象刷新页面无法刷新
const data = () => {
  const name = ref('name')
  const index = 1
  const queryFormObj = reactive({
    name: '5',
    state1: '1',
    state6: ['2022-08-08', '2022-09-30']
  })
  const queryFormSelect = {
    state4: [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2'
      },
      {
        value: 'Option3',
        label: 'Option3'
      }
    ],
    state5: [
      {
        value: '1',
        label: '1'
      },
      {
        value: '2',
        label: '2'
      },
      {
        value: '3',
        label: '3'
      }
    ],
    state9: [
      {
        value: '1',
        label: 'Level one 1',
        children: [
          {
            value: '1-1',
            label: 'Level two 1-1',
            children: [
              {
                value: '1-1-1',
                label: 'Level three 1-1-1'
              }
            ]
          }
        ]
      },
      {
        value: '2',
        label: 'Level one 2',
        children: [
          {
            value: '2-1',
            label: 'Level two 2-1',
            children: [
              {
                value: '2-1-1',
                label: 'Level three 2-1-1'
              }
            ]
          },
          {
            value: '2-2',
            label: 'Level two 2-2',
            children: [
              {
                value: '2-2-1',
                label: 'Level three 2-2-1'
              }
            ]
          }
        ]
      },
      {
        value: '3',
        label: 'Level one 3',
        children: [
          {
            value: '3-1',
            label: 'Level two 3-1',
            children: [
              {
                value: '3-1-1',
                label: 'Level three 3-1-1'
              }
            ]
          },
          {
            value: '3-2',
            label: 'Level two 3-2',
            children: [
              {
                value: '3-2-1',
                label: 'Level three 3-2-1'
              }
            ]
          }
        ]
      }
    ],
    state10: [
      {
        value: '1',
        label: 'Level one 1',
        children: [
          {
            value: '1-1',
            label: 'Level two 1-1',
            children: [
              {
                value: '1-1-1',
                label: 'Level three 1-1-1'
              }
            ]
          }
        ]
      },
      {
        value: '2',
        label: 'Level one 2',
        children: [
          {
            value: '2-1',
            label: 'Level two 2-1',
            children: [
              {
                value: '2-1-1',
                label: 'Level three 2-1-1'
              }
            ]
          },
          {
            value: '2-2',
            label: 'Level two 2-2',
            children: [
              {
                value: '2-2-1',
                label: 'Level three 2-2-1'
              }
            ]
          }
        ]
      },
      {
        value: '3',
        label: 'Level one 3',
        children: [
          {
            value: '3-1',
            label: 'Level two 3-1',
            children: [
              {
                value: '3-1-1',
                label: 'Level three 3-1-1'
              }
            ]
          },
          {
            value: '3-2',
            label: 'Level two 3-2',
            children: [
              {
                value: '3-2-1',
                label: 'Level three 3-2-1'
              }
            ]
          }
        ]
      }
    ]
  }
  const queryFormTags = [
    { label: '测试', prop: 'state1', tag: 'input', clearable: false },
    { label: '测试1', prop: 'state2', tag: 'input' },
    { label: '测试3', prop: 'state4', tag: 'select', filterable: true, multiple: true },
    { label: '测试4', prop: 'state5', tag: 'select' },
    { label: '测试7', prop: 'state9', tag: 'treeSelect' },
    {
      label: '测试8',
      prop: 'state10',
      tag: 'treeSelect',
      renderAfterExpand: true,
      multiple: true,
      showCheckbox: true,
      filterable: true
    },
    {
      label: '测试2',
      prop: 'state3',
      tag: 'input',
      templete: () => {
        return (
          <div>
            <el-input v-model={queryFormObj.name} />
          </div>
        )
      }
    },
    { label: '测试7', prop: 'state8', tag: 'datePicker', type: 'date', format: 'YYYY-MM-DD' },
    { label: '测试5', prop: 'state6', tag: 'datePicker', type: 'daterange', format: 'YYYY-MM-DD', clearable: false },
    { label: '测试6', prop: 'state7', tag: 'datePicker', type: 'datetimerange', format: 'YYYY-MM-DD HH:mm:ss' }
  ]
  return {
    name,
    index,
    queryFormObj,
    queryFormSelect,
    queryFormTags
  }
}
export default data
// export function data() {
//   const name = ref('name')
//   const index = 1
//   const queryFormObj = reactive({
//     name: '5',
//     state1: '1',
//     state6: ['2022-08-08', '2022-09-30']
//   })
//   const queryFormSelect = {
//     state4: [
//       {
//         value: 'Option1',
//         label: 'Option1'
//       },
//       {
//         value: 'Option2',
//         label: 'Option2'
//       },
//       {
//         value: 'Option3',
//         label: 'Option3'
//       }
//     ],
//     state5: [
//       {
//         value: '1',
//         label: '1'
//       },
//       {
//         value: '2',
//         label: '2'
//       },
//       {
//         value: '3',
//         label: '3'
//       }
//     ],
//     state9: [
//       {
//         value: '1',
//         label: 'Level one 1',
//         children: [
//           {
//             value: '1-1',
//             label: 'Level two 1-1',
//             children: [
//               {
//                 value: '1-1-1',
//                 label: 'Level three 1-1-1'
//               }
//             ]
//           }
//         ]
//       },
//       {
//         value: '2',
//         label: 'Level one 2',
//         children: [
//           {
//             value: '2-1',
//             label: 'Level two 2-1',
//             children: [
//               {
//                 value: '2-1-1',
//                 label: 'Level three 2-1-1'
//               }
//             ]
//           },
//           {
//             value: '2-2',
//             label: 'Level two 2-2',
//             children: [
//               {
//                 value: '2-2-1',
//                 label: 'Level three 2-2-1'
//               }
//             ]
//           }
//         ]
//       },
//       {
//         value: '3',
//         label: 'Level one 3',
//         children: [
//           {
//             value: '3-1',
//             label: 'Level two 3-1',
//             children: [
//               {
//                 value: '3-1-1',
//                 label: 'Level three 3-1-1'
//               }
//             ]
//           },
//           {
//             value: '3-2',
//             label: 'Level two 3-2',
//             children: [
//               {
//                 value: '3-2-1',
//                 label: 'Level three 3-2-1'
//               }
//             ]
//           }
//         ]
//       }
//     ],
//     state10: [
//       {
//         value: '1',
//         label: 'Level one 1',
//         children: [
//           {
//             value: '1-1',
//             label: 'Level two 1-1',
//             children: [
//               {
//                 value: '1-1-1',
//                 label: 'Level three 1-1-1'
//               }
//             ]
//           }
//         ]
//       },
//       {
//         value: '2',
//         label: 'Level one 2',
//         children: [
//           {
//             value: '2-1',
//             label: 'Level two 2-1',
//             children: [
//               {
//                 value: '2-1-1',
//                 label: 'Level three 2-1-1'
//               }
//             ]
//           },
//           {
//             value: '2-2',
//             label: 'Level two 2-2',
//             children: [
//               {
//                 value: '2-2-1',
//                 label: 'Level three 2-2-1'
//               }
//             ]
//           }
//         ]
//       },
//       {
//         value: '3',
//         label: 'Level one 3',
//         children: [
//           {
//             value: '3-1',
//             label: 'Level two 3-1',
//             children: [
//               {
//                 value: '3-1-1',
//                 label: 'Level three 3-1-1'
//               }
//             ]
//           },
//           {
//             value: '3-2',
//             label: 'Level two 3-2',
//             children: [
//               {
//                 value: '3-2-1',
//                 label: 'Level three 3-2-1'
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
//   const queryFormTags = [
//     { label: '测试', prop: 'state1', tag: 'input', clearable: false },
//     { label: '测试1', prop: 'state2', tag: 'input' },
//     { label: '测试3', prop: 'state4', tag: 'select', filterable: true, multiple: true },
//     { label: '测试4', prop: 'state5', tag: 'select' },
//     { label: '测试7', prop: 'state9', tag: 'treeSelect' },
//     {
//       label: '测试8',
//       prop: 'state10',
//       tag: 'treeSelect',
//       renderAfterExpand: true,
//       multiple: true,
//       showCheckbox: true,
//       filterable: true
//     },
//     {
//       label: '测试2',
//       prop: 'state3',
//       tag: 'input',
//       templete: () => {
//         return (
//           <div>
//             <el-input v-model={queryFormObj.name} />
//           </div>
//         )
//       }
//     },
//     { label: '测试7', prop: 'state8', tag: 'datePicker', type: 'date', format: 'YYYY-MM-DD' },
//     { label: '测试5', prop: 'state6', tag: 'datePicker', type: 'daterange', format: 'YYYY-MM-DD', clearable: false },
//     { label: '测试6', prop: 'state7', tag: 'datePicker', type: 'datetimerange', format: 'YYYY-MM-DD HH:mm:ss' }
//   ]
//   return {
//     name,
//     index,
//     queryFormObj,
//     queryFormSelect,
//     queryFormTags
//   }
// }
