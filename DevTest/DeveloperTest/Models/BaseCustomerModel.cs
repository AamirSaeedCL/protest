using System;
using System.ComponentModel.DataAnnotations;
using DeveloperTest.Database.Models;

namespace DeveloperTest.Models
{
    public class BaseCustomerModel
    {
        [Required]
        [MinLength(5)]
        public string Name { get; set; }
        public CustomerType Type { get; set; }
    }
}
